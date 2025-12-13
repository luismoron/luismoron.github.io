import jsPDF from 'jspdf';
import { mockProfile } from '../data/mockData';

export const generateCV = () => {
  console.log('Generando CV con jsPDF...');
  console.log('jsPDF disponible:', typeof jsPDF);

  // Verificar si jsPDF está disponible
  if (typeof jsPDF === 'undefined') {
    console.error('jsPDF no está disponible');
    alert('Error: jsPDF no está cargado. Por favor recarga la página.');
    return;
  }

  try {
    console.log('Creando documento PDF simple...');
    const doc = new jsPDF();
    console.log('Documento creado, agregando texto...');

    // PDF simple para probar
    doc.setFontSize(20);
    doc.text('CV de Luis Morón', 20, 30);
    doc.setFontSize(12);
    doc.text('Desarrollador de Software', 20, 50);
    doc.text('Email: leonelmoron@gmail.com', 20, 70);

    console.log('Guardando PDF...');
    doc.save('CV_Luis_Moron_Simple.pdf');
    console.log('PDF guardado exitosamente');
  } catch (error) {
    console.error('Error al crear PDF simple:', error);
    alert('Error al generar PDF: ' + error.message);
  }
};