
function onScroll() {
    if (scrollY > 0) {
        navigation.classlist.add('scroll')
    } else {
        navigation.classlist.remove('scroll')
    }
} 