function url_replace(url) {
    url = url.replace(/%20/g, " ")
    url = url.replace(/%C4%84/g, "Ą")
    url = url.replace(/%C4%86/g, "Ć")
    url = url.replace(/%C4%98/g, "Ę")
    url = url.replace(/%C5%81/g, "Ł")
    url = url.replace(/%C5%83/g, "Ń")
    url = url.replace(/%C3%93/g, "Ó")
    url = url.replace(/%C5%9A/g, "Ś")
    url = url.replace(/%C5%B9/g, "Ź")
    url = url.replace(/%C5%BB/g, "Ż")
    url = url.replace(/%C4%85/g, "ą")
    url = url.replace(/%C4%87/g, "ć")
    url = url.replace(/%C4%99/g, "ę")
    url = url.replace(/%C5%82/g, "ł")
    url = url.replace(/%C5%84/g, "ń")
    url = url.replace(/%C3%B3/g, "ó")
    url = url.replace(/%C5%9B/g, "ś")
    url = url.replace(/%C5%BA/g, "ź")
    url = url.replace(/%C5%BC/g, "ż")

    return url
}

exports.url_replace = url_replace