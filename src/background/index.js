/*global chrome*/
export const myFunc = async () => {
    console.log(chrome)
    chrome.runtime.onStartup.addListener(() => {
        console.log('onStartup....');
    })
}
