"use strict"

function createChess() {
    const main = document.querySelector("#main");

    const tbl = document.createElement("table");
    tbl.classList.add("chess-board")

    for (let i = 0; i < 9; i++) {
        const tr = document.createElement('tr');
        if (i === 0) {
            const thFirst = document.createElement('th');
            tr.appendChild(thFirst)
            for (let k = 0; k < 8; k++) {
                const th = document.createElement('th');
                th.textContent = String.fromCharCode(k + 65);
                tr.appendChild(th);
            }
        }
        else {
            for (let j = 1; j < 10; j++) {
                if (j === 1) {
                    const th = document.createElement("th");
                    th.textContent = i;
                    tr.appendChild(th);
                }
                else {
                    const td = document.createElement("td");
                    if ((j + i) % 2 === 0) {
                        td.classList.add("dark");
                    }
                    else {
                        td.classList.add("light");
                    }
                    tr.appendChild(td);
                }
            }
        }
        tbl.appendChild(tr);
    }

    main.appendChild(tbl);
}

createChess();
