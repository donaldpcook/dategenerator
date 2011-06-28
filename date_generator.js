!function(window) {
	var hiddenInput,
		util = {},
		monthType = "numbers",
		month = "Month:",
		date = "Day:",
		year = "Year:",
		days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		dayHolder,
		op,
		
		updateHidden = function() {
			var enteredDate = new Date(year, month - 1, date),
				today = new Date(),
				eighteen,
				minYear,
				maxYear;
			
			

			if (op.validation && op.validation.callback && typeof op.validation.callback === "function") {
				if (op.validation.min) {
					minYear = today.setFullYear(today.getFullYear() - op.validation.min);
					if (minYear < enteredDate) {
						op.validation.callback();
					}
				}
				
				if (op.validation.max) {
					maxYear = today.setFullYear(today.getFullYear() - op.validation.max);
					if (maxYear > enteredDate) {
						op.validation.callback();
					}
				}
			}
			
			hiddenInput.value = month + '/' + date + '/' + year;
		},
		
		fillMonths = function() {
			var months = [],
				abbreviated = ["Month:", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
				
			for (var i = 0; i < 13; i++) {
				if (monthType === "abbreviated") {
					months.push(abbreviated[i]);
				} else {
					months.push(i);
				}
			}
			
			return months;
		},
		
		fillYears = function() {
			var years = [],
				today = new Date();
			
			years[0] = "Year:";
			for (var i = today.getFullYear(); i > 1900; i--) {
				years.push(i);
			}
			
			return years;
		},
		
		changeDays = function() {
			var holder = document.createElement("select"),
				d = document.createElement("option"),
				dHolder;
			
			d.appendChild(document.createTextNode("Day:"));
			holder.appendChild(d);
			
			if (month === "Month:") {
				dHolder = 0;
			} else {
				dHolder = month - 1;
			}
			
			for (var i = 0; i < days_in_month[dHolder]; i++) {
				d = document.createElement("option");
				
				d.value = i + 1;
				d.appendChild(document.createTextNode(i + 1));
				holder.appendChild(d);
			}
			
			return holder;
		},
		
		changeDaysDom = function() {
			var newNode = changeDays();
			
			dayHolder.parentNode.replaceChild(newNode, dayHolder);
			dayHolder = newNode;
			
			util.eventHandler('change', newNode, function(evt) {
				var targ;
				evt.target ? targ = evt.target : targ = evt.srcElement;
				date = targ.value;
				updateHidden();
			});
		},
		
		createBoxes = function() {
			var doc = document,
				monthH = doc.createElement("select"),
				yearH = doc.createElement("select"),
				months = fillMonths(),
				years = fillYears();
				
			for (var i = 0, l = months.length; i < l; i++) {
				var m = doc.createElement("option");
				
				m.value = i;
				m.appendChild(doc.createTextNode(months[i]));
				
				monthH.appendChild(m);
			}
			
			dayHolder = changeDays();
			
			for (var g = 0, d = years.length; g < d; g++) {
				var y = doc.createElement("option");
				
				y.value = years[g];
				y.appendChild(doc.createTextNode(years[g]));
				
				yearH.appendChild(y);
			}
			
			util.eventHandler('change', monthH, function(evt) {
				var targ;
				evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
				evt.target ? targ = evt.target : targ = evt.srcElement;
				month = targ.value;
				changeDaysDom();
				monthH.nextSibling.value = date;
				updateHidden();
			});
			
			util.eventHandler('change', dayHolder, function(evt) {
				var targ;
				evt.target ? targ = evt.target : targ = evt.srcElement;
				date = targ.value;
				updateHidden();
			});
			
			util.eventHandler('change', yearH, function(evt) {
				var targ;
				evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
				evt.target ? targ = evt.target : targ = evt.srcElement;
				if (targ.value % 4 === 0) {
		            days_in_month[1] = 29;
		        } else {
		            days_in_month[1] = 28;
	            }
				year = targ.value;
				changeDaysDom();
				yearH.previousSibling.value = date;
				updateHidden();
			});
			
			yearH.className = "year";
			month.name =  "month";
			
			// insert after hidden
			hiddenInput.parentNode.insertBefore(monthH, hiddenInput.nextSibling);
			monthH.parentNode.insertBefore(dayHolder, monthH.nextSibling);
			dayHolder.parentNode.insertBefore(yearH, dayHolder.nextSibling);
				
		},
	
		dateGenerator = function(hiddenBox, options) {
			if (options.month) monthType = options.month;
			if (options) op = options;
			
			hiddenInput = hiddenBox;
			createBoxes();
		};
		
	util.eventHandler = function(event_type, el, cb) {
		if (document.addEventListener) {
			el.addEventListener(event_type, cb, false);
		} else {
			el.attachEvent(('on' + event_type), cb);
		}
	};
	
	window.dateGenerator = dateGenerator;
}(window);