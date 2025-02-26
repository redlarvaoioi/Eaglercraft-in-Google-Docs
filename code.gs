/**
 * This script creates a custom Eaglercraft launcher within Google Docs using an iframe.
 * The launcher can be resized, minimized, or closed, and it mimics the layout of the War Thunder launcher.
 * When the user clicks the "Play" button, it launches the selected Eaglercraft version in an iframe.
 * It also includes a Mods Marketplace tab in the launcher dropdown.
 */

function onOpen() {
  DocumentApp.getUi()
    .createMenu('Eaglercraft Launcher')
    .addItem('Open Launcher', 'openLauncher')
    .addItem('Mods Marketplace', 'openModsMarketplace')
    .addToUi();
}

function openLauncher() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('EaglercraftLauncher')
    .setWidth(1000)
    .setHeight(700)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Eaglercraft Launcher');
}

function openModsMarketplace() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('ModsMarketplace')
    .setWidth(1000)
    .setHeight(700)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Mods Marketplace');
}
