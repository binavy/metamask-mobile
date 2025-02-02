'use strict';
import TestHelpers from '../../helpers';
import Browser from '../../pages/Browser/BrowserView';
import AccountListView from '../../pages/AccountListView';
import TabBarComponent from '../../pages/TabBarComponent';
import ToastModal from '../../pages/modals/ToastModal';
import ConnectedAccountsModal from '../../pages/Browser/ConnectedAccountsModal';
import NetworkListModal from '../../pages/Network/NetworkListModal';
import AddAccountModal from '../../pages/modals/AddAccountModal';
import { loginToApp } from '../../viewHelper';
import FixtureBuilder from '../../fixtures/fixture-builder';
import { withFixtures } from '../../fixtures/fixture-helper';
import Assertions from '../../utils/Assertions';
import { SmokeCore } from '../../tags';

const AccountTwoText = 'Account 2';

describe(SmokeCore('MultiChain Permissions System:'), () => {
  beforeAll(async () => {
    jest.setTimeout(150000);
    await TestHelpers.reverseServerPort();
  });

  it('should connect multiple accounts and revoke them', async () => {
    await withFixtures(
      {
        dapp: true,
        fixture: new FixtureBuilder()
          .withPermissionControllerConnectedToTestDapp()
          .build(),
        restartDevice: true,
      },
      async () => {
        //should navigate to browser
        await loginToApp();
        await TabBarComponent.tapBrowser();
        await Assertions.checkIfVisible(Browser.browserScreenID);

        //TODO: should re add connecting to an external swap step after detox has been updated

        await Browser.navigateToTestDApp();
        await Browser.tapNetworkAvatarButtonOnBrowser();
        await Assertions.checkIfVisible(ConnectedAccountsModal.title);
        await TestHelpers.delay(2000);

        await Assertions.checkIfNotVisible(ToastModal.notificationTitle);
        await ConnectedAccountsModal.tapConnectMoreAccountsButton();
        await AccountListView.tapAddAccountButton();
        await AddAccountModal.tapCreateAccount();
        if (device.getPlatform() === 'android') {
          await Assertions.checkIfTextIsDisplayed(AccountTwoText);
        }
        await AccountListView.tapAccountIndex(0);
        await AccountListView.tapConnectAccountsButton();

        // should revoke accounts
        await Browser.tapNetworkAvatarButtonOnBrowser();
        await ConnectedAccountsModal.tapManagePermissionsButton();

        await ConnectedAccountsModal.tapDisconnectAllAccountsAndNetworksButton();
        // await ConnectedAccountsModal.tapDisconnectButton();
        await ConnectedAccountsModal.tapConfirmDisconnectNetworksButton();

        await Browser.tapNetworkAvatarButtonOnBrowser();
        await Assertions.checkIfNotVisible(ConnectedAccountsModal.title);
        await Assertions.checkIfVisible(NetworkListModal.networkScroll);
        await NetworkListModal.swipeToDismissModal();
        await Assertions.checkIfNotVisible(NetworkListModal.networkScroll);
      },
    );
  });
});
