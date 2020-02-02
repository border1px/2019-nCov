var pageScroll = {
  // https://uedsky.com/2016-06/mobile-modal-scroll/

  // .modal-open {
  //   position: fixed;
  //   width: 100%;
  // }
  scrollTop: '',
  bodyCls: 'modal-open',
  lock: function () {
    this.scrollTop = document.scrollingElement.scrollTop
    document.body.classList.add(this.bodyCls)
    document.body.style.top = -this.scrollTop + 'px'
  },
  unlock: function () {
    document.body.classList.remove(this.bodyCls)
    // scrollTop lost after set position:fixed, restore it back.
    document.scrollingElement.scrollTop = this.scrollTop
  }
}

export { pageScroll }
