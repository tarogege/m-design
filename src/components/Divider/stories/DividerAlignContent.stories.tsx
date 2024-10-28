import { Divider } from "maodesign";

const content =
  "maomao hasd;lfahahah alksdjfoiasdlkfasdnf,masdfaAudioBufferSourceNode,amndfaksdfasdfa,smdnfaksdfn,amds f,mas df asdfajskdf,amn";

const DividerAlignContent = () => {
  return (
    <>
      <p>{content}</p>
      <Divider>divider</Divider>
      <p>{content}</p>
      <Divider alignContent="start">divider</Divider>
      <p>{content}</p>
      <Divider alignContent="end">divider</Divider>
    </>
  );
};

export default DividerAlignContent;
