<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>البحث في الموقع</title>

<style>

body{
font-family:'Noto Kufi Arabic',sans-serif;
background: linear-gradient(to bottom,#eef5ff,#d0e4ff);
margin:0;
text-align:center;
}

.search-box{
margin-top:80px;
}

#searchInput{
width:60%;
padding:18px;
border-radius:50px;
border:none;
font-size:18px;
background:rgba(255,255,255,0.3);
backdrop-filter:blur(10px);
}

.results{
margin-top:40px;
}

.result-card{
background:white;
width:70%;
margin:15px auto;
padding:15px;
border-radius:12px;
box-shadow:0 4px 10px rgba(0,0,0,0.2);
}

.result-card a{
text-decoration:none;
color:#0f172a;
font-size:20px;
font-weight:bold;
}

</style>
</head>

<body>

<h1>البحث في الموقع</h1>

<div class="search-box">
<input type="text" id="searchInput" placeholder="اكتب كلمة البحث...">
</div>

<div class="results" id="results"></div>

<script src="searchData.js"></script>

<script>

const input=document.getElementById("searchInput");
const results=document.getElementById("results");

input.addEventListener("keyup",()=>{

let keyword=input.value.toLowerCase();
results.innerHTML="";

siteSearchData.forEach(item=>{

if(item.title.toLowerCase().includes(keyword)){

results.innerHTML+=`
<div class="result-card">
<a href="${item.page}">${item.title}</a>
<p>${item.category}</p>
</div>
`;

}

});

});
</script>

</body>
</html>
