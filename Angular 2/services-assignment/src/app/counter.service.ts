export class CounterService {
 inactiveToActive = 0;
 activeToInactive = 0;

  logActiveStatusChange() {
    console.log('Active Count changed, new status: ' + this.activeToInactive);
  }

  logInactiveStatusChange() {
    console.log('Inactive Count changed, new status: ' + this.inactiveToActive);
  }
}
