import CMS from "netlify-cms";

import CVPagePreview from "./preview-templates/CVPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewTemplate("CV", CVPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
