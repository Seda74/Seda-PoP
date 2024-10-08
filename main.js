$(document).ready(function() {
  $("#arc-list-toggle").click(function() {
    $isChecked = $("#arc-list-toggle").is(":checked");
    $("input[name=arc-list]").attr("checked", $isChecked);
  });

  $("#skull-list-toggle").click(function() {
    $isChecked = $("#skull-list-toggle").is(":checked");
    $("input[name=skull-list]").attr("checked", $isChecked);
  });

  $("#hook-list-toggle").click(function() {
    $isChecked = $("#hook-list-toggle").is(":checked");
    $("input[name=hook-list]").attr("checked", $isChecked);
  });

  $("#scythe-list-toggle").click(function() {
    $isChecked = $("#scythe-list-toggle").is(":checked");
    $("input[name=scythe-list]").attr("checked", $isChecked);
  });

  $("#bowl-list-toggle").click(function() {
    $isChecked = $("#bowl-list-toggle").is(":checked");
    $("input[name=bowl-list]").attr("checked", $isChecked);
  });

  $("#Pincers-list-toggle").click(function() {
    $isChecked = $("#Pincers-list-toggle").is(":checked");
    $("input[name=Pincers-list]").attr("checked", $isChecked);
  });

  $("#Loop-list-toggle").click(function() {
    $isChecked = $("#Loop-list-toggle").is(":checked");
    $("input[name=Loop-list]").attr("checked", $isChecked);
  });

  $("#Shield-list-toggle").click(function() {
    $isChecked = $("#Shield-list-toggle").is(":checked");
    $("input[name=Shield-list]").attr("checked", $isChecked);
  });

  
// Use a single event handler for all toggles
$(".toggle-checkbox").click(function() {
  var isChecked = $(this).is(":checked");
  var targetList = $(this).attr("data-target-list");

  $("input[name='" + targetList + "']").prop("checked", isChecked);

  // Update Local Storage (optional)
  updateLocalStorage(targetList, isChecked);
});

// Load data from Local Storage on page load (optional)
loadLocalStorageData();
});

// Function to update Local Storage (optional)
function updateLocalStorage(listName, isChecked) {
var storageKey = "checkboxState_" + listName;
localStorage.setItem(storageKey, isChecked);
}

// Function to load data from Local Storage (optional)
function loadLocalStorageData() {
$(".toggle-checkbox").each(function() {
  var listName = $(this).attr("data-target-list");
  var storageKey = "checkboxState_" + listName;
  var storedValue = localStorage.getItem(storageKey);

  if (storedValue !== null) {
    $(this).prop("checked", storedValue === "true"); // Convert string to boolean
    $("input[name='" + listName + "']").prop("checked", storedValue === "true");
  }
});
}
