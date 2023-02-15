const adjustName = async () => {

    const names = ["Bài 1","Bài 2","Bài 3","Bài 4","Bài 5","Bài 6","Bài 7","Bài 8","Bài 9","Bài 10","Bài 11","Bài 12","Bài 13","Bài 14","Bài 15","Bài 16","Bài 17","Bài 18","Bài 19","Bài 20","Bài 21","Bài 22","Bài 23","Bài 24","Bài 25","Bài 26","Bài 27","Bài 28","Bài 29","Bài 30","Bài 31","Bài 32","Bài 33","Bài 34","Bài 35","Bài 36","Bài 37","Bài 38","Bài 39","Bài 40","Bài 41","Bài 42","Bài 43","Bài 44","Bài 45","Bài 46","Bài 47"]
    document.querySelectorAll('.level-name').forEach((el, index) => {
        setTimeout(() => {

            el.click()

            setTimeout(() => {
                el.querySelector('input').value = names[index]
            }, 30)

            setTimeout(() => {
                el.querySelector('input').click()
            }, 50)

        }, 100 * index)
    })
}

adjustName()
