import { Divider } from "maodesign";

const content =
  "maomao hasd;lfahahah alksdjfoiasdlkfasdnf,masdfaAudioBufferSourceNode,amndfaksdfasdfa,smdnfaksdfn,amds f,mas df asdfajskdf,amn";

const DividerDefault = () => {
  return (
    <>
      <p>{content}</p>
      <Divider />
      <p>{content}</p>
      <Divider>This is a divider</Divider>
      <p>{content}</p>
    </>
  );
};

export default DividerDefault;
