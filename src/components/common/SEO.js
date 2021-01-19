import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";

function SEO({ url = "https://gokulumhomes.com" }) {
  const meta = [
    {
      name: "description",
      content:
        "Gokulum Homes is a real estate company in India that specializes in the construction, design, and sale of elegant living spaces with outstanding architectural value in Gurugram's most premium locations.",
    },
    {
      name: "keywords",
      content:
        "house in Gurgaon, 4 bhk house Gurgaon, India's top real estate companies, top builders in Gurgaon, India real estate companies, top builders in India, Gurgaon builders, real estate Gurgaon, builder in Gurgaon, builders Gurgaon, Gurgaon real estate company, real estate company in Gurgaon, builder and developer, real estate websites NCR, property sell NCR, properties Gurgaon, Gurgaon housing, properties in Gurgaon, apartments for sale, flats for sale NCR, floor plan, home plan, design home plan, luxury builder floor in Gurgaon, golf course road Gurgaon, Gurgaon one apartment, Gurgaon property dealer",
    },
  ];
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title="Gokulum Homes | Luxury Real Estate in NCR | Properties & Housing"
      link={[{ rel: "canonical", href: url.replace(/\/$/, "") }]}
      meta={meta}
    />
  );
}

export default SEO;
