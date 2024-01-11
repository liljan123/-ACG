<script>
        var count = 2;
        var a = [...document.querySelectorAll('#banner a')];
        document.getElementById("a1").style.width = "20px";
        var carouselID = window.setInterval("carousel()", 5000);
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function () {
                changebgcolor(i);
            }, false);
        }
        function carousel() {
            let imgSrc = `images/ad${count}.webp`;
            let aChange = `a${count}`;
            /*记录<a>标签需要变回背景颜色的序号。*/
            let aCount = count - 1;
            if (aCount == 0) { aCount = 3; }
            let aRestore = `a${aCount}`;
            document.getElementById("ad").src = imgSrc;
            document.getElementById(aChange).style.animation = "pageshape2 1s linear";
            document.getElementById(aChange).style.width = "20px";
            document.getElementById(aRestore).style.animation = "pageshape1 1s linear";
            document.getElementById(aRestore).style.width = "8px";
            count = count + 1;
            if (count == 4) { count = 1; }
        }
        function changebgcolor(num) {
            document.getElementById("ad").src = `images/ad${num}.webp`;
            for (let targetNum = 1; targetNum <= 3; targetNum++) {
                let aTarget = `a${targetNum}`;
                if (targetNum == num) {
                    document.getElementById(aTarget).style.animation = "pageshape2 1s linear";
                    document.getElementById(aTarget).style.width = "20px";
                }
                else {
                    document.getElementById(aTarget).style.animation = "pageshape1 1s linear";
                    document.getElementById(aTarget).style.width = "8px";
                }
            }
            count=num;
        }

    </script>