import { Divider } from "maodesign";

const content =
  "maomao hasd;lfahahah alksdjfoiasdlkfasdnf,masdfaAudioBufferSourceNode,amndfaksdfasdfa,smdnfaksdfn,amds f,mas df asdfajskdf,amn";

const DividerVariant = () => {
  return (
    <>
      <p>{content}</p>
      <Divider></Divider>
      <p>{content}</p>
      <Divider variant="dashed"></Divider>
      <p>{content}</p>
      <Divider variant="dotted"></Divider>
    </>
  );
};

export default DividerVariant;
