<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $this->createCity($user);

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    private function createCity($user) {
        $coordX = 0;
        $coordY = 0;

        do {
            $isCityExist = false;
            $coordX = rand(1, 100);
            $coordY = rand(1, 100);

            $city = City::where('coord_x', $coordX)->where('coord_y', $coordY)->first();

            if ($city && $city->id) {
                $isCityExist = true;
            }
        }
        while ($isCityExist);

        City::factory(1)->create([
            'user_id' => $user->id,
            'coord_x' => $coordX,
            'coord_y' => $coordY,
            'title' => 'Остров игрока ' . $user->id
        ]);
    }
}
