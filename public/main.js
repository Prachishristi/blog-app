/*function fetchBlogs(category) {
    const blogs = [{
        title: "If advancement of technology is leading to a better Life",
        content: `The effects of technological advancement are both positive and
            negative. Positively, technology advancement has simplified the way
            we do things, it saves time, it increases on production.
        `,
        createdAt: "25th Feb, 2020",
        userId: "someUserId",
        category: "travel"
    },
    {
        title: " Food as Human Fuel",
        content: ` Food Is More Than "Fuel" Or "Energy" Or "Calories". True, the
    macronutrients (proteins, carbohydrates, and fats) in food do
    contain "energy" or "calories." (Or, perhaps most correctly,
    "chemical bonds that,
    `,
        createdAt: "28th Feb, 2020",
        userId: "someUserId",
        category: "tech"
    },
    {
        title: " Time Travelling ",
        content: ` Time travel — moving between different points in time — has been a
    popular topic for science fiction for decades. ...
    `,
        createdAt: "28th Feb, 2020",
        userId: "someUserId",
        category: "food"
    }];

    if (category) {
        let catBlogs = [];
        blogs.map(e => {
            if (e.category === category) {
                catBlogs.push(e);
            }
        });

        console.log("catBlogs : ", catBlogs)

        return catBlogs;
    }

    return blogs;
}


function renderBlogs(category) {
    const blogs = fetchBlogs(category);

    const blogsToRender = blogs.map(blog => `
        <h2>
            <b>${blog.title}</b>
        </h2>
        <div>
            ${blog.content}
        </div>
        <div style="background-color:pink;">
            Jane Mario <a href=""> channel</a>
        </div>
    `);

    //  document.getElementById("renderBlogs").innerHTML = blogsToRender;
}

window.onload = function () {

    // getQueryStringParams();
    // const url = new URL(location.search);
    // const category = url.searchParams.get("category");
    // console.log("category : ", category)

    console.log("location.search : ", location.search);
    const queryParams = parse_query_string(location.search);
    console.log("queryParams : ", queryParams);
    const category = queryParams["?category"];
    console.log("category : ", category)

    // renderBlogs(category);
}*/

function logValues() {
    console.log('Title is ', document.getElementById('title').value);
    console.log('Category is ', document.getElementById('Category').value);
    console.log('Content is ', document.getElementById('Content').value);
    console.log('Email  is ', document.getElementById('email').value);
    console.log('Password is ', document.getElementById('pwd').value);

}

function getQueryStringParams() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("urlParams : ", urlParams);
    // const myParam = urlParams.get('myParam');
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}


function logValues(event) {
    var value = document.getElementById("submit").innerHTML = submit;
    console.log(value);

}

