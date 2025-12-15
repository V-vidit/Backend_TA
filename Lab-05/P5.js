const url=new URL("https://www.demo.com")

url.pathname="path/path1/path2"

url.searchParams.append("name", "Vidit");
url.searchParams.append("age", 20);
url.searchParams.append("city", "Rajkot");

console.log("URL: ", url.toString());
