@extends('layouts.app')
@section('content')

<div id="app">
    <template>
        <v-card>
          <v-tabs
            background-color="deep-purple accent-4"
            fixed-tabs
          >
            <v-tab style="text-decoration: none; color: inherit;" to="/profile">Profile</v-tab>
            <v-tab style="text-decoration: none; color: inherit;" to="/feed">Feed</v-tab>
          </v-tabs>
        </v-card>
      </template>

    <div class="container">
    <router-view v-bind:user-auth="{{ Auth::user() }}"></router-view>

    </div>

</div>
    <script src="{{ asset('js/app.js') }}"></script>

    @endsection