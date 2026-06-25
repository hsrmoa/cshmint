import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import InputWrap from "@/components/common/inputWrap/InputWrap.tsx";
import DatePicker from "@/components/common/datepicker";
import Icon from "@/components/common/icon/Icon.tsx";
import SelectBox from "@/components/common/selectBox";
import Checkbox from "@/components/common/checkbox";
import AuthLayout from "@/components/layouts/auth";
import FormCard from "@/components/common/formCard";
import ButtonWrap from "@/components/common/buttonWrap";
import LedgerListLayout from "@/components/layouts/ledgerList";
import LedgerCard from "@/components/common/ledger/ledgerCard";
import LedgerCardContent from "@/components/common/ledger/ledgerCardContent";
import FormList from "@/components/common/form/formList/FormList";
import FormRow from "@/components/common/form/formRow/FormRow.tsx";
import Table from "@/components/common/table/Table.tsx";
import IconButton from "@/components/common/icon/IconButton.tsx";

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
          <h2>CheckBox</h2>
          <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
            <Checkbox checked={true} onChange={()=> {}}/>
            <Checkbox checked={true} onChange={()=> {}} label="체크"/>
            <Checkbox checked={true} disabled={true} onChange={()=> {}} label="체크(비활성)"/>
            <Checkbox checked={false} onChange={()=> {}}/>
            <Checkbox checked={false} onChange={()=> {}} label="체크해제"/>
            <Checkbox checked={false} disabled={true} onChange={()=> {}} label="체크해제(비활성)"/>
          </div>
        </section>

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
          <Icon name="minus" color="#2B9D7E" />
          <Icon name="plus" color="#2B9D7E" />
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

      <section style={{marginTop: '32px'}}>
        <h2>Auth Layout</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <AuthLayout>
            <FormCard>
              <InputWrap label="Email" isFullWidth={true} isError={true} errorMessage="이메일을 입력해주세요.">
                <Input placeholder="검색버튼 비활성" suffixType="text" suffix="원"/>
              </InputWrap>
              <InputWrap label="Email" isFullWidth={true}>
                <Input placeholder="검색버튼 비활성" suffixType="text" suffix="원"/>
              </InputWrap>
              <ButtonWrap>
                <Button variant="success">success</Button>
                <Button variant="success">success</Button>
              </ButtonWrap>
            </FormCard>
          </AuthLayout>
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>LEDGER LIST</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <LedgerListLayout
            title="가계부 목록"
            searchSort={<SelectBox options={[{value: '', label:'생성일 빠른 순'}, {value: '1', label:'1'}]}/>}
            bodyType="cardList"
          >
            <LedgerCard
              onClick={(cardIndex: number) => {alert(cardIndex)}}
              title="소라의가계부"
              isLast={false}
              cardIndex={0}
            >
              <LedgerCardContent owner="소라빵" createAt="2025-04-19"/>
            </LedgerCard>
            <LedgerCard
              onClick={(cardIndex: number) => {alert(cardIndex)}}
              title="가족여행장부"
              isLast={false}
              cardIndex={1}
            >
              <LedgerCardContent owner="소라빵" createAt="2025-04-19"/>
            </LedgerCard>
            <LedgerCard
              onClick={(cardIndex: number) => {alert(cardIndex)}}
              title="TOY_회비장부"
              className="orange"
              isLast={false}
              cardIndex={2}
            >
              <LedgerCardContent
                owner="유인우"
                ownerColor="orange"
                members={["박수연","소라빵","심지훈","조성호"]}
                createAt="2025-04-19"
              />
            </LedgerCard>
            <LedgerCard
              cardIndex={3}
              title={"TEST"}
              onAdd={() => {alert("가계부를 추가합니다.")}}
            >
              TEST
            </LedgerCard>
          </LedgerListLayout>
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>FORM LIST</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
          <FormList columns={["TEST"]}>
            <FormRow
              isLast={false}
              rowIndex={0}
              onRemove={(index) => {alert(index);}}
            >
              <Input placeholder="기본 INPUT입니다." />
              <SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]}/>
              <Checkbox checked={true} onChange={()=> {}} label="체크"/>
            </FormRow>
            <FormRow
              isLast={true}
              rowIndex={1}
              onAdd={() => {alert("ROW 추가해야함")}}
            >
              <Input placeholder="기본 INPUT입니다." />
              <SelectBox options={[{value: '', label:'전체'}, {value: '1', label:'1'}]}/>
              <Checkbox checked={false} onChange={()=> {}} label="체크"/>
            </FormRow>
          </FormList>
        </div>
      </section>

      <section style={{marginTop: '32px'}}>
        <h2>TABLE</h2>
        <div style={{display: 'flex', gap: '12px', marginTop: '12px'}}>
            <Table
              columns={[
                {
                  key:"name",
                  title: "이름"
                },
                {
                  key:"id",
                  title: "TEST",
                  align: "center"
                }
              ]}
              data={[{
                id: 1,
                name: "홍길동",
              },{
                id: 2,
                name: "김철수",
              }]}
            />
        </div>
      </section>

    </div>
  );
}

export default Guide;