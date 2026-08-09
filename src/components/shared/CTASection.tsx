import React from "react";
import Link from "next/link";

export interface CTASectionProps {
  /** Main heading (Defaults to standard project inquiry) */
  title?: string;
  /** Sub-description (Defaults to web/mobile app blurb) */
  description?: string;
  /** Call to action button text (Defaults to "Get in touch with Ana") */
  buttonText?: string;
  /** Where the button should link to (Defaults to "/contact") */
  buttonHref?: string;
}

export default function CTASection({
  title = "Have a web or mobile project in mind?",
  description = "Whether you need an interactive Next.js web application or a cross-platform mobile app, let’s build it right from day one.",
  buttonText = "Get in touch with Ana",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <div className="cta-section-wrapper">
      <div className="cta-card-box">
        <h3 className="cta-card-title">{title}</h3>
        <p className="cta-card-desc">{description}</p>
        <Link href={buttonHref} className="btn-cta-contact">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
