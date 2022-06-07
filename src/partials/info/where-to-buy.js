import ymaps from "ymaps"

const mapContainer = document.querySelector("#map")

ymaps
  .load()
  .then((maps) => {
    const map = new maps.Map(mapContainer, {
      center: [55.658765, 37.430173],
      zoom: 17
    })

    const placemark = new maps.Placemark(
      map.getCenter(),
      {
        balloonContent: "«Дверной Регион» - торгово-производственная компания, работающая для вас с 2019 года. В ассортименте более 2000 моделей. Результат нашей работы - это 10 000 довольных клиентов и 50 000 установленных дверей."
      },
      {
        preset: "islands#icon",
        iconColor: "#0095b6"
      }
    )

    map.geoObjects.add(placemark)
  })
