import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import InputWrap from "@/components/common/inputWrap/InputWrap.tsx";
import DatePicker from "@/components/common/datepicker";
import Icon from "@/components/common/icon/Icon.tsx";
import SelectBox from "@/components/common/selectBox";

/**
 *  @name: Guide.tsx(퍼블 가이드 문서)
 *  @date: 2026-03-28 한소라
 *  @description  전체 프로젝트의 퍼블 가이드 문서
 */
function Guide() {
  return (
    <div style={{padding: '32px'}}>
      <h1> UI Guide </h1>
      <section style={{marginTop: '32px'}}>
        <h2>Button</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <Button>primary</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="danger">danger</Button>
          <Button variant="success">success</Button>
          <Button disabled={true}>danger</Button>
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>Input</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <InputWrap label="기본" isFullWidth={true}>
            <Input placeholder="기본 INPUT입니다."/>
          </InputWrap>
          <InputWrap label="필수값" isFullWidth={true} isRequired={true}>
            <Input placeholder="필수값입니다."/>
          </InputWrap>
          <InputWrap label="에러" isFullWidth={true} isError={true} errorMessage="에러가 났습니다.">
            <Input value="에러 input" isError={true}/>
          </InputWrap>
        </div>
        <section style={{marginTop: '32px'}}>
          <h2>DatePicker</h2>
          <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
            <DatePicker />
            <DatePicker prefix="매월" value="2025-04-01"/>
            <DatePicker disabled={true} />
            <DatePicker isError={true} />
          </div>
        </section>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <InputWrap label="비활성" isFullWidth={true}>
            <Input placeholder="기본 INPUT입니다." disabled={true}/>
          </InputWrap>
          <InputWrap isFullWidth={true} helperText="테스트 입니다.">
            <Input placeholder="필수값입니다." value="라벨값이 없음"/>
          </InputWrap>
        </div>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <InputWrap label="검색버튼" isFullWidth={true}>
            <Input value="기본 INPUT입니다." type="search" onSuffixClick={() => {
              alert("AA");
            }}/>
          </InputWrap>
          <InputWrap label="검색버튼 - 비활성" isFullWidth={true}>
            <Input value="검색버튼 비활성" type="search" onSuffixClick={() => {
              alert("BB");
            }} disabled={true}/>
          </InputWrap>
          <InputWrap label="SUFFIX-TEXT" isFullWidth={true}>
            <Input placeholder="검색버튼 비활성" suffixType="text" suffix="원"/>
          </InputWrap>
        </div>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <Input placeholder="검색버튼 비활성" />
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>DatePicker</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <DatePicker />
          <DatePicker disabled={true} />
          <DatePicker isError={true} />
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>ICON</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <Icon name="crown" color="#2B9D7E" />
        </div>
      </section>


      <section style={{marginTop: '32px'}}>
        <h2>SelectBox</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]}/>
          <SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]} value="1"/>
          <SelectBox disabled={true} />
          <SelectBox isError={true} options={[{value: '', label:'전체'}, {value: '1', label:'1'}]} />
        </div>
      </section>
    </div>
  );
}

export default Guide;