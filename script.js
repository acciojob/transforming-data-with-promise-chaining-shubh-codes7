let btn = document.querySelector("#btn");
let out = document.querySelector("#output");

btn.addEventListener("click", () => {
    let inp = parseInt(document.querySelector("#ip").value);

    if (isNaN(inp)) {
        out.textContent = "Please enter a valid number!";
        return;
    }

    new Promise((resolve) => {
        setTimeout(() => {
            out.textContent = `Result: ${inp}`;
            resolve(inp);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                out.textContent = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                out.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                out.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                out.textContent = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    });
});
