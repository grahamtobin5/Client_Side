
$(document).ready(function () {    
    $('div').append('<table></table>');
    $('table').attr('cellspacing','10px');
    $('table').append('<tr></tr>');
    $('tr').append('<td>Temperature (F) versus Relative Humidity (%)</td>');
    $('td').attr('colspan','100%');
    $('td').attr('class','center');
    $('tr').after('<tr class = "one"></tr>');
    $('tr.one').append('<td class = "temp">°F</td>');	
     for (let i = 90; i > 30; i-=10)
     {
           $('tr.one').append('<td class = "humid">' + i + "%"+ '</td>');
         
          
     }
 
     for (let i = 80; i < 115; i += 5)
     {
        $('table').append('<tr></tr>');
        $('tr:last-child').append('<td class = "temp">'+ i + '</td>');
        var humid = 90;
        for (let j = 0; j < 6; j++)
        {
            var mt = Math.floor(heatIndex(i,humid));
            if (i < 95)
            {
                
		if (mt > 130)
            	{
                 	$('tr:last-child').append('<td class = "extreme">'+ mt + '</td>').hide().slideDown(); 	
		}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ mt + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ mt + '</td>').hide().delay(500).fadeIn(700);
           	} 
            	else
            	{
                	$('tr:last-child').append('<td class = "ok">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}	  
            }
            else if (i == 95 && humid < 90)
            {

                if (mt > 130)
            	{
                 	$('tr:last-child').append('<td class = "extreme">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ mt + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else
            	{
                	$('tr:last-child').append('<td class = "ok">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            }
            else if (i == 100 && humid < 80)
            {
                if (mt > 130)
            	{
                 	$('tr:last-child').append('<td class = "extreme">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ mt + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else
            	{
                	$('tr:last-child').append('<td class = "ok">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            }
            else if (i == 105 && humid < 70)
            {
                if (mt > 130)
            	{
                	 $('tr:last-child').append('<td class = "extreme">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ mt + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else
            	{
                	$('tr:last-child').append('<td class = "ok">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            }
            else if (i==110 && humid < 50)
            {
            
		if (mt > 130)
            	{
                 	$('tr:last-child').append('<td class = "extreme">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ mt + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else
            	{
                	$('tr:last-child').append('<td class = "ok">'+ mt + '</td>').hide().delay(500).fadeIn(700);
            	}
            }
            else
            {
                if (mt > 130)
            	{
                 	$('tr:last-child').append('<td class = "extreme">'+ " "+ '</td>').hide().delay(500).fadeIn(700);
            	}
            	else if (mt > 102)
            	{
               		$('tr:last-child').append('<td class = "danger">'+ " " + '</td>').hide().delay(500).fadeIn(700);

            	}
            	else if (mt > 89)
            	{
                	$('tr:last-child').append('<td class = "caution">'+ " " + '</td>').hide().delay(500).fadeIn(700);
            	}
            	else
           	{
                	$('tr:last-child').append('<td class = "ok">'+ " " + '</td>').hide().delay(500).fadeIn(700);
            	}
            }

            humid -=10;
        }
     }

});   


