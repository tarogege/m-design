const IMPORT_PATH_REGEX = /from ['"](.*?)['"];/g;

// Parsed a scoped package name into name, version, and path.
const RE_SCOPED = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
// Parsed a non-scoped package name into name, version, path
const RE_NON_SCOPED = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;

type PackageDependencies = { [dependencyName: string]: string };

// FIXME: bug：容易把viteconfig的alias也当成dependency处理
function parsePackageName(importPath: string) {
  const m = RE_SCOPED.exec(importPath) || RE_NON_SCOPED.exec(importPath);

  if (!m) {
    throw new Error(`[parse-package-name] invalid package name: ${importPath}`);
  }

  return {
    name: m[1] || "",
    version: m[2] || "latest",
    path: m[3] || "",
  };
}

export const getDependencies = (
  storyFile: string,
  requiredDep: Record<string, any>,
  optionalDep: Record<string, any>
) => {
  // 从源文件中提取出依赖项，并将它和requiredDep，optionalDep合并然后return
  const depArrInCode = Array.from(storyFile.matchAll(IMPORT_PATH_REGEX));
  const depObjInCode = depArrInCode.reduce((depResult, current) => {
    const depName = current[1];
    if (depName.startsWith(".") || depName.startsWith("react")) {
      return depResult;
    }

    const dependency = parsePackageName(depName).name;
    if (!depResult.hasOwnProperty(dependency)) {
      depResult[dependency] = optionalDep[dependency] ?? "latest";
    }

    return depResult;
  }, {} as PackageDependencies);

  return { ...depObjInCode, ...requiredDep };
};

export default getDependencies;
