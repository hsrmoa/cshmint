
import MainLayout from "@/components/layouts/main";
import AuthLayout from "@/components/layouts/auth";
import LedgerListLayout from "@/components/layouts/ledgerList";

/**
 * 가계부 > 가계부 목록
 * @constructor
 */
function LedgerList() {
    return (
      <MainLayout>
        <LedgerListLayout
          title="가계부 목록"
        >
        </LedgerListLayout>
      </MainLayout>
    )
}

export default LedgerList;