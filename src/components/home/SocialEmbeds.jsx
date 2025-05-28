import { useEffect } from "react";

const facebook = "https://www.facebook.com/catamarcatucapital";
const instagram = "https://www.instagram.com/catamarcacapital";
const tiktok = "https://www.tiktok.com/@municatamarca";
const tiktokUsername = tiktok?.split("/@")[1] ?? "";

export default function SocialEmbeds() {
  useEffect(() => {
    const igScript = document.createElement("script");
    igScript.setAttribute("src", "//www.instagram.com/embed.js");
    igScript.async = true;
    document.body.appendChild(igScript);

    const tkScript = document.createElement("script");
    tkScript.setAttribute("src", "https://www.tiktok.com/embed.js");
    tkScript.async = true;
    document.body.appendChild(tkScript);
  }, []);

  return (
    <section className="redes-sociales-section" id="redes-sociales">
      <div className="redes-sociales-container">
        <h2 className="redes-sociales-title">Redes Sociales</h2>

        <div className="redes-sociales-grid">
          {/* Facebook */}
          <div className="redes-sociales-card">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                facebook
              )}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width="100%"
              height="550"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          {/* Instagram */}
          <div className="redes-sociales-card">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={instagram}
              data-instgrm-version="14"
              style={{ width: "100%", minHeight: "550px", margin: "0 auto" }}
            />
          </div>

          {/* TikTok */}
          <div className="redes-sociales-card">
            <blockquote
              className="tiktok-embed"
              cite={tiktok}
              data-unique-id={tiktokUsername}
              data-embed-type="creator"
              style={{ maxWidth: "100%", minHeight: "550px" }}
            >
              <section>
                <a target="_blank" href={tiktok}>
                  @{tiktokUsername}
                </a>{" "}
                en TikTok
              </section>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
