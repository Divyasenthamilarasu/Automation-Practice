const { test, expect } = require('@playwright/test');
const {Button}= require('../POMpractise1/Button.spec.js');
const{WindowPage}=require('../POMpractise1/Windowopening.spec.js');
const {newTab}=require('../POMpractise1/newTab.spec.js');
const {Alert}=require('../POMpractise1/Alert.spec.js');
const {tableValue1}=require('../POMpractise1/tableValue1.spec.js');
const {tableValue2}=require('../POMpractise1/tableValue2.spec.js');
const {scroll}=require('../POMpractise1/scroll.spec.js');
const {Reload}=require('../POMpractise1/Reload.spec.js');
const {iframe}=require('../POMpractise1/iframe.spec.js');
let country='India';
let name='Divya';
let tableValue='0';
let cell='Dwayne';


test('validating End-to-end page',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
page.waitForLoadState('domcontentloaded')

//Radiobutton, checkbox, dropdown, autocomplete
const button=new Button(page);
await button.clickButton(country);

//New window opening
const windowPage=new WindowPage(page);
await windowPage.clickOpenWindowButton();

//New tab opening
const newtab=new newTab(page);
await newtab.tabOpening();

//Alertbox
const alertBox=new Alert(page);
await alertBox.alertmessage(name);

//slecting value from table=0
const tablevalue1=new tableValue1(page);
await tablevalue1.pickValue(tableValue);

//slecting any value from table
const tablevalue2=new tableValue2(page);
await tablevalue2.pickValue2(tableValue);

//scroll functionality
const Scroll=new scroll(page);
await Scroll.scrollFunctionality(cell);

//Reload functionality
const reload=new Reload(page);
await reload.reloadFunctionality();

//iframe functionality
const Iframe=new iframe(page);
await Iframe.iframeHandling();



})