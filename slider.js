var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-img img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;

function updateImageByIndex(index) {
    document.querySelectorAll('.list-img div').forEach(item => {
        item.classList.remove('active')
    });
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')

}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0';
        setTimeout(() => {
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 400)
    })
})

updateImageByIndex(0)

prevBtn.addEventListener('click', e => {
    imgFeature.style.animation = ''
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    } else {
        currentIndex--;
    }
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'
    }, 400)
})

nextBtn.addEventListener('click', e => {
    imgFeature.style.animation = ''
    if (currentIndex == (listImg.length - 1)) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
    }, 400)
})