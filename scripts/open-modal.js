$(document).ready(function () {
    $(".avatar").on("click", function (e) {
      $(".modal__image").attr("src", e.target.src)
      $(".modal").toggleClass("hide")
      $("body").toggleClass("overflow-block")
    })
  })

  $(".modal").on("click", function () {
    $(".modal").toggleClass("hide")
    $("body").toggleClass("overflow-block")
  })
