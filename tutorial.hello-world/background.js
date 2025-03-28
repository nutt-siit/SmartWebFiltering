/* chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    console.log(currentTab.url);
    if (currentTab.url.includes("www.google.com")) {
      console.log("Yes");
      chrome.tabs.update(currentTab.id, { url: "https://www.siit.tu.ac.th" });
    }
  
  }); */

  chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.get(details.tabId, function (tab) {
    console.log(tab.url);
      if (tab.url.includes("soccer")) {
        chrome.tabs.update(tab.id, { url: "https://www.siit.tu.ac.th" });
      }
    });
  });