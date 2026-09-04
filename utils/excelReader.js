const ExcelJS=require('exceljs');


async function readExcel(filePath,sheetName)
{
const workbook= new ExcelJS.Workbook();
await workbook.xlsx.readFile(filePath);
const worksheet=workbook.getWorksheet(sheetName);
const data=[];
const headers=worksheet.getRow(1).values; //read header (email,password)
worksheet.eachRow((row,rowNumber)=>  //gothrough each row in excel
{
    if(rowNumber===1) 
        return; // skip the header (email,password)
    const rowData={};
    row.eachCell((cell,colNumber)=> //gothrough each cell in row
    {
//rowData[headers[colNumber]]=cell.value; //[1]=username- cellvalue(1st cell) [2]-password- cellvalue(2nd cell)
const key= headers[colNumber];
rowData[key]=cell.value?String(cell.value).trim():'';
    })
    data.push(rowData); // put objects into array
})
return data;
}
module.exports={readExcel}; //javascript files to use myreadExcel




//'C:\Users\Arasu Divya\Documents\exceldata1.xlsx'