$(document).ready(function() {


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .fc-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

$('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        eventLimit: 3,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },

       events: [
            {
                title  : 'Bugfix-123456',
                start  : '2017-07-02'
            },
            {
                title  : 'D855M Geren.',
                start  : '2017-07-03'
            },
            {
                title  : 'Sem Atividade',
                start  : '2017-07-04'
            },
            {
                title  : 'D855M CA',
                start  : '2017-07-05'
            },
            {
                title  : 'D855M Waiting',
                start  : '2017-07-05'
            },
        ],

        eventRender: function(event, element) {
              /*element.find(".fc-event-title").remove();
              element.find(".fc-event-time").remove();
              var new_description =
                  '<br/>'
                  + event.customer + '<br/>'
                  + '<strong>Address: </strong><br/>' + event.address + '<br/>'
                  + '<strong>Task: </strong><br/>' + event.task + '<br/>'
                  + '<strong>Place: </strong>' + event.place + '<br/>'
              ;*/

              element.prepend("<span style='float: right'>00:00</span>");
              //element.prepend("Gerenciamento");
          },

        dayRender: function (date, cell) {
            var html = "<span class='fc-event-title'>" + "00:00" +
                "</span>";

            cell.prepend(html);

        },

    });




