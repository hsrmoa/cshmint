import Input from "@/components/common/input";
import ButtnTEst from '@/components/common/button';

function test() {

  // ex) 수연이가 오늘 늦잠을 잔다
  let testbolaen =  false;
  // const 변하지 않은값 :: let :: 변할수잇
  const array = [];  // 배열
  array.push('test');

  const object:any = {test:"testYYY"};
  console.log(object);
  return (
    <>
       <Input />
       <ButtnTEst disabled={testbolaen} type="button" >TEST</ButtnTEst>
    </>
  )
}

export default test;