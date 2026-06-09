import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Loader2, X, ZoomIn, ZoomOut } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import catalogoAsset from "@/assets/catalogo.pdf.asset.json";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const DEFAULT_PDF_URL = catalogoAsset.url;

interface CatalogViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl?: string;
  title?: string;
}

const CatalogViewer = ({
  open,
  onOpenChange,
  pdfUrl = DEFAULT_PDF_URL,
  title = "Catálogo IMPULSA",
}: CatalogViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState(800);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const compute = () => {
      const vw = window.innerWidth;
      const maxW = Math.min(vw - 32, 900);
      setPageWidth(maxW);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100dvh] sm:max-w-[100vw] p-0 bg-navy-dark border-0 rounded-none flex flex-col gap-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 shrink-0 bg-navy-dark">
          <h2 className="text-white font-semibold text-base sm:text-lg truncate">{title}</h2>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hidden sm:inline-flex"
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
            >
              <ZoomOut className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hidden sm:inline-flex"
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
            >
              <ZoomIn className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              asChild
            >
              <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => onOpenChange(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable PDF viewer */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto overflow-x-auto bg-navy-dark/95"
        >
          <div className="flex flex-col items-center gap-4 py-4 px-2">
            <Document
              file={pdfUrl}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={
                <div className="flex flex-col items-center gap-3 text-white py-20">
                  <Loader2 className="w-8 h-8 animate-spin" />
                  <span>Cargando catálogo…</span>
                </div>
              }
              error={
                <div className="text-center text-white max-w-md px-6 py-20">
                  <p className="text-lg font-semibold mb-2">Catálogo no disponible</p>
                  <p className="text-white/70 text-sm">
                    Aún no hemos cargado el PDF. Inténtalo más tarde o contáctanos por WhatsApp.
                  </p>
                </div>
              }
            >
              {Array.from({ length: numPages }, (_, i) => (
                <div key={i} className="shadow-2xl bg-white">
                  <Page
                    pageNumber={i + 1}
                    width={pageWidth * zoom}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    loading={
                      <div
                        className="flex items-center justify-center bg-white"
                        style={{ width: pageWidth * zoom, height: (pageWidth * zoom) * 1.414 }}
                      >
                        <Loader2 className="w-6 h-6 animate-spin text-navy-dark" />
                      </div>
                    }
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CatalogViewer;
