## 1. What is DOCTYPE?
It serves as an instruction to the web browser, informing it about the version of HTML or XML being used, allowing it to correctly parse and render the page. 

> DOCTYPE declaration helps web browsers understand how to interpret and display your HTML or XML document, ensuring that it's rendered accurately according to the specified standards. 

## 2. What are meta tags?
- A <meta> tag provides metadata that describes or defines the HTML document and its content.
- These tags are placed within the <head> section of an HTML page and are not displayed on the webpage itself. 
- They are primarily used for search engine optimization (SEO), providing information to search engines about the page's content and helping it rank higher.

### Types of <meta> tags:
**charset:**
Specifies the character encoding of the document, often set to "utf-8" to support a wide range of characters, including emojis. 
**viewport:**
Controls the page's dimensions and scaling for different devices, ensuring proper rendering on various screen sizes. 
**description:**
Provides a brief summary of the page's content, used by search engines in their search results. 
**keywords:**
(Though not as heavily used by search engines as in the past) can provide additional information about the page's content, although WebFX's blog says that its influence on ranking has decreased. 

```
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="This is a description of the page.">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <title>Page Title</title>
</head>
```

## 3. async Vs defer


