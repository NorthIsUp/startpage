window.addEvent('domready', function(){
	var el = $$('a'),
		color = el.getStyle('backgroundColor');
	
	$$('a').addEvents({
		mouseenter: function(){
			this.morph({
				'padding-left': '5px'
			});
		},
		mouseleave: function(){
			this.morph({
				'padding-left': '0px'
			});
		}
	});

	$('menu').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '80px');
		}
	});

	$('menut').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '80px');
		}
	});

	$('menuth').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '80px');
		}
	});

	$('menuf').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '80px');
		}
	});
});
