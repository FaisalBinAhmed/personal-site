import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import resume from '../Assets/resume.pdf';

function PDFViewer() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	// useEffect(() => {
	// 	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	// }, []);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			{/* <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document> */}
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
}

export default PDFViewer;
