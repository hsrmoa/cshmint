import MainLayout from "@/components/layouts/main";
import LedgerListLayout from "@/components/layouts/ledgerList";

/**
 *  가계부 > 가계부 목록
 *  @constructor
 */
export default  function LedgerCreate() {
    return (
      <MainLayout>
        <LedgerListLayout
          title="가계부 만들기"
          bodyType="grid"
        >
          TEST
        </LedgerListLayout>
      </MainLayout>
    )
}