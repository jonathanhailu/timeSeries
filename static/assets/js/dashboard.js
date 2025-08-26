$(document).ready(function() {
  const apiUrl = "http://time-series.mopd.gov.et/api/mobile/topic-list/";
  const baseUrl = "http://time-series.mopd.gov.et";

  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function(response) {
      console.log("API response:", response);

      if (response.data && Array.isArray(response.data)) {
        const cards = response.data.map(item => {
          const title = item.title_ENG || "No title";
          const desc = item.title_AMH || "";
          const bgImg = item.background_image ? baseUrl + item.background_image : "https://via.placeholder.com/600x300?text=No+Image";
          const iconImg = item.image_icons ? baseUrl + item.image_icons : "https://via.placeholder.com/48?text=Icon";
          const count = item.count_category || "";
          const link = `/topic-detail/${item.id}/`;
          return `
            <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
              <a href="${link}" class="w-100 text-decoration-none topic-card-link">
                <div class="card h-100 border-0 shadow-lg position-relative overflow-hidden" style="border-radius:2rem;background: url('${bgImg}') center/cover no-repeat; min-height:220px;">
                  <div class="position-absolute start-0 bottom-0 m-3 d-flex align-items-center" style="z-index:2;">
                    <div class="bg-white d-flex align-items-center justify-content-center" style="width:56px;height:56px;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                      <img src="${iconImg}" alt="icon" style="width:32px;height:32px;object-fit:contain;">
                    </div>
                    <div class="ms-3 text-white">
                      <div class="fw-bold fs-5 lh-1">${title}</div>
                      <div class="small lh-1">${desc}</div>
                    </div>
                  </div>
                  <div class="position-absolute end-0 top-2 m-3" style="z-index:1;">
                    <span class="display-1 fw-bold text-white-50" style="font-size:10rem;line-height:1;opacity:0.70;">${count}</span>
                  </div>
                  <div style="padding-bottom:56.25%;"></div>
                </div>
              </a>
            </div>
          `;
        });
  $("#topic-list").html('<div class="row gx-3 gy-4">' + cards.join('') + '</div>');
      } else {
        $("#topic-list").html("<p>No topics found.</p>");
      }
    },
    error: function(xhr, status, error) {
      console.error("Error fetching API:", status, error);
      $("#topic-list").html("<p class='text-danger'>Error loading topics.</p>");
    }
  });
});