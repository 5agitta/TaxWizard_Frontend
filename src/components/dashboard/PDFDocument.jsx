import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFDocument = ({ responseData }) => {
  const pdfDoc = new jsPDF();

  pdfDoc.text(`Tax ID: ${responseData.taxId}`, 20, 20);
  pdfDoc.text(`Year: ${responseData.year}`, 20, 30);
  pdfDoc.text(`Total Income: ${responseData.totalIncome}`, 20, 40);
  pdfDoc.text(`Total Tax: ${responseData.totalTax}`, 20, 50);
  pdfDoc.text(`Total Tax Paid: ${responseData.totalTaxPaid}`, 20, 60);
  pdfDoc.text(`Total Tax Owed: ${responseData.totalTaxOwed}`, 20, 70);
  pdfDoc.text(`ETIN: ${responseData.etin}`, 20, 80);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Tax ID: {responseData.taxId}</Text>
          <Text>Year: {responseData.year}</Text>
          <Text>Total Income: {responseData.totalIncome}</Text>
          <Text>Total Tax: {responseData.totalTax}</Text>
          <Text>Total Tax Paid: {responseData.totalTaxPaid}</Text>
          <Text>Total Tax Owed: {responseData.totalTaxOwed}</Text>
          <Text>ETIN: {responseData.etin}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
