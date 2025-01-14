function(_c, _a) // t: #s.target.loc
{
	// hi :3
	//_c is context
	//_a is args

	// Check for missing params
	if (!_a || !_a.t) return { ok: false }

	// Variable declerations
	var ez = ["open", "release", "unlock"],
		c00 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"],
	c = true

	_a.m = cl() // Initial call

	// Stops loop if locks are NOT found
	while (c)
	{
		c = false

		// EZ locks **ez locks are broken weird, needs more testing??**

		c = crk("EZ_21", ez)

		if (crk("EZ_35", ez)) c = crk("digit", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

		if (crk("EZ_40", ez)) c = crk("ez_prime", [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])

		// c00x my acursed

		if (crk("c001", c00)) {
			// Special handling for the color_digit
			_a.color_digit = _a.c001.length

			// Additional call for the colour digit
			_a.m = cl()
		}

		if (crk("c002", c00)) {
			// Find the position of the correct colour and set the (comp)lement to 4 positions higher
			let i = c00.indexOf(_a.c002)
			let c1 = i > 3 ? i - 4 : i + 4
			_a.c002_complement = c00[c1]

			_a.m = cl()
		}

		if (crk("c003", c00)) {
			let i = c00.indexOf(_a.c003),
				c2 = i > 3 ? i - 3 : i + 5,
				c3 = i > 4 ? i - 5 : i + 3
			_a.c003_triad_1 = c00[c2]
			_a.c003_triad_2 = c00[c3]

			_a.m = cl()
		}

		// l0cket my beloved, so easy, so kind <3

		//c = crk("l0cket", ["cmppiq", "6hh8xw", "uphlaw", "vc2c7q", "tvfkyq", "xwz7ja", "sa23uw", "ellux0", "72umy0",
		//	"i874y3", "9p65cu", "fr8ibu", "eoq6de", "xfnkqe", "pmvr1q", "y111qa"])

		return _a

		// Call (cl) function
		function cl() {

			let r = _a.t.call(_a)
			return r.split('\n')[r.split('\n').length - 1]

		}

		function crk(l, ans) {
			if (_a.m.includes(l)) {
				// Iterate over all answers in the list (out of order)
				for (let a of ans) {
					_a[l] = a;
					_a.m = cl();

					// If the lock is solved (no "is not" message), return true
					if (!_a.m.includes("is not")) {
						return true;  // Lock is cracked
					}
				}
			}
			return false;  // Lock was not cracked
		}
	}
}
