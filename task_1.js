var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - Сначало инкримент потом присвоение
d = b++; alert(d);           // 1 - Сначало присвоение потом инкримент
c = (2+ ++a); alert(c);      // 5 - а уже = 2, идет инкримент а потом 2 + а то с = 5
d = (2+ b++); alert(d);      // 4 - b уже = 2 после инкремента 2 + 2 то d = 4
alert(a);                    // 3 - инкремент на 4 строке = 3
alert(b);                    // 3 - инкремент на 5 строке = 3