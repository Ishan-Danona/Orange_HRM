import { ApplyLeave } from "./2-applyleave";
import { MyLeave } from "./3-myleave";
import { LeaveList } from "./4-leavelist";
import { Reports } from "./6-reports";
import { Configure } from "./7-configure";

export class LeavePage {
  readonly applyleave;
  readonly myleave;
  readonly leavelist;
  readonly report;
  readonly configure;

  constructor(page) {
    this.applyleave = new ApplyLeave(page);
    this.myleave = new MyLeave(page);
    this.leavelist = new LeaveList(page);
    this.report = new Reports(page);
    this.configure = new Configure(page);
  }

  async leaveActions(
    fromMonth,
    fromYear,
    fromDate,
    toMonth,
    toYear,
    toDate,
    status,
    type,
    employeeName,
    subUnit,
    generateFor,
    location,
    jobTitle,
    situation
  ) {
    //await this.applyleave.applyLeave();
    await this.myleave.myLeave(
      fromMonth,
      fromYear,
      fromDate,
      toMonth,
      toYear,
      toDate,
      status,
      type
    );
    await this.leavelist.leaveList(
      fromMonth,
      fromYear,
      fromDate,
      toMonth,
      toYear,
      toDate,
      status,
      type,
      employeeName,
      subUnit
    );
    await this.report.leaveEntitlementsNUsageReport(
      generateFor,
      type,
      location,
      subUnit,
      jobTitle,
      employeeName
    );
    await this.report.myLeaveEntitlementsNUsageReport();
    await this.configure.leavePeriod(fromMonth, fromDate);
    await this.configure.leaveTypes(situation);
  }
}
