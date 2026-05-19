//Libreria para manipulacion y generacion de archivos excel
import { X } from 'lucide-react';
import * as XLSX from 'xlsx';

//Funcion utilitaria para generar un reporte en formato Excel a partir de datos tabulares
//Patron: Exportacion de datos (dataset -> archivo descargable)
export function generateExcelReport({
    headers,                        //Array de encabezados (columnas)
    rows,                           //Array de filas (array de arrays)
    fileName = "user-report.xlsx"   //Nombre dela rchivo de salida
}) {
    //Estructura final de la hoja:
    //Primera fila = headers
    //Siguientes filas = datos
    const worksheetData = [
        headers,
        ...rows
    ];

    //Convierte un array de arrays (ADA = Array of Arrays) en una hoja de excel
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    //Crea un nuevo libro de Excel (workbook)
    const workbook = XLSX.utils.book_new();

    //Agrega la hoja al libro con el nombre de "Ususarios"
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    //Genera y descarga el archivo Excel en el cliente
    XLSX.writeFile(workbook, fileName);
}
