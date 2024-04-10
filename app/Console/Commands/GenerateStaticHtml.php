<?php


namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GenerateStaticHtml extends Command
{
    protected $signature = 'generate:static-html';
    protected $description = 'Generate static HTML file from Blade template';

    public function handle()
    {
        $html = view('welcome')->render();
        File::put(public_path('index.html'), $html);

        $this->info('Static HTML file generated successfully.');
    }
}
