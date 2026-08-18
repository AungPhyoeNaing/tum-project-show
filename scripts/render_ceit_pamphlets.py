import os
import shutil
import fitz  # PyMuPDF
from PIL import Image

def render_pdfs():
    base_dir = r"c:\Users\stephen\Desktop\tum-project-show"
    ceit_source_dir = os.path.join(base_dir, "all-projects", "CEIT")
    harvestia_source = os.path.join(base_dir, "new-projects-appended", "CEIT", "Harvestia Pamphlet Myanmar Version.pdf")
    
    out_pdf_dir = os.path.join(base_dir, "public", "pdfs", "ceit")
    out_img_dir = os.path.join(base_dir, "public", "pamphlets", "ceit")
    
    os.makedirs(out_pdf_dir, exist_ok=True)
    os.makedirs(out_img_dir, exist_ok=True)

    mappings = [
        {
            "id": "ceit-01",
            "title": "Multi-User 3D Simulation Environment with Efficient Path-Finding Algorithm",
            "files": [os.path.join(ceit_source_dir, "Aung Myo Pai Pamphlet (SemII).pdf")],
            "pdf_name": "ceit-01-pamphlet.pdf"
        },
        {
            "id": "ceit-02",
            "title": "BOJF — Restaurant Service & Management System",
            "files": [
                os.path.join(ceit_source_dir, "BOJF_Flyer_Front .pdf"),
                os.path.join(ceit_source_dir, "BOJF_Flyer_Back.pdf")
            ],
            "pdf_name": "ceit-02-pamphlet.pdf"
        },
        {
            "id": "ceit-03",
            "title": "Expenso — Smart Expense Tracker for Daily Financial Management",
            "files": [os.path.join(ceit_source_dir, "Thandar Soe Team_Expenso_Pamphlet (SemI).pdf")],
            "pdf_name": "ceit-03-pamphlet.pdf"
        },
        {
            "id": "ceit-04",
            "title": "Trends of TUM (ToT) — Campus Social Networking Platform",
            "files": [os.path.join(ceit_source_dir, "ToT-Pamphlet.pdf")],
            "pdf_name": "ceit-04-pamphlet.pdf"
        },
        {
            "id": "ceit-05",
            "title": "Tomo & Nomo — AI Chemistry Matcher & Real-Time Friendship Quiz",
            "files": [os.path.join(ceit_source_dir, "Tomo & Nomo pamphlet.pdf")],
            "pdf_name": "ceit-05-pamphlet.pdf"
        },
        {
            "id": "ceit-06",
            "title": "MetricFit — Biometric Fitness, Calorie & Nutrition Tracking Platform",
            "files": [os.path.join(ceit_source_dir, "Tr.Moh Metricfit Pamphlet (4)(1)_b3dd8a7a-1d11-4f3f-8586-9d1b0e63a5bf.pdf")],
            "pdf_name": "ceit-06-pamphlet.pdf"
        },
        {
            "id": "ceit-07",
            "title": "Host-Based WiFi Intrusion Detection System (WIDS)",
            "files": [os.path.join(ceit_source_dir, "WIDS.pdf")],
            "pdf_name": "ceit-07-pamphlet.pdf"
        },
        {
            "id": "ceit-08",
            "title": "Web-Based Acoustic Data Transmission System Using Fast Fourier Transform (FFT)",
            "files": [os.path.join(ceit_source_dir, "Web-Based Acoustic Data Transmission with FFT (7).pdf")],
            "pdf_name": "ceit-08-pamphlet.pdf"
        },
        {
            "id": "ceit-09",
            "title": "Harvestia — 2D Farming Simulation Game",
            "files": [harvestia_source],
            "pdf_name": "ceit-09-pamphlet.pdf"
        }
    ]

    results = []

    for item in mappings:
        proj_id = item["id"]
        pdf_out_path = os.path.join(out_pdf_dir, item["pdf_name"])
        
        # Combine files if multiple (like BOJF Front & Back)
        combined_doc = fitz.open()
        for f in item["files"]:
            if os.path.exists(f):
                doc = fitz.open(f)
                combined_doc.insert_pdf(doc)
            else:
                print(f"File not found: {f}")
        
        combined_doc.save(pdf_out_path)
        print(f"Saved combined PDF: {pdf_out_path} ({len(combined_doc)} pages)")

        page_images = []
        # Render each page to image with 2.0x matrix (~144-200 DPI, perfect balance of high sharpness and fast mobile loading)
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)

        for page_idx in range(len(combined_doc)):
            page = combined_doc[page_idx]
            pix = page.get_pixmap(matrix=mat, alpha=False)
            
            img_filename = f"{proj_id}-page-{page_idx + 1}.webp"
            img_path = os.path.join(out_img_dir, img_filename)
            
            # Save as WebP via PIL for ultra-compact file size and high quality
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            img.save(img_path, format="WEBP", quality=90, method=6)
            
            print(f"Rendered {proj_id} Page {page_idx + 1}: {pix.width}x{pix.height} -> {img_filename}")
            page_images.append(f"/pamphlets/ceit/{img_filename}")

        results.append({
            "id": proj_id,
            "title": item["title"],
            "pdfUrl": f"/pdfs/ceit/{item['pdf_name']}",
            "pageImages": page_images,
            "pageCount": len(page_images)
        })

    print("\nProcessing complete. Generated manifest:")
    import json
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    render_pdfs()
