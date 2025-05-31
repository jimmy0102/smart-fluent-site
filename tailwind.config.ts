import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	 extend: {
  		colors: {
        // Smart Fluent Brand Colors from Spec
        'sf-blue': '#0C5AC8',        // AI Blue
        'sf-light': '#F0F4FF',       // Light
        'sf-orange': '#F58220',      // Action Orange
        // Brand color palette
        'brand-orange': '#ff8c00',
        'brand-orange-light': '#ffb347',
        'brand-orange-dark': '#cc7000',
        'brand-gray': '#6b7280',
        'brand-gray-light': '#f3f4f6',
        'brand-gray-dark': '#374151',
        'brand-white': '#ffffff',
        'brand-black': '#111827',
        'brand-bg': '#fafafa',
        'brand-border': '#e5e7eb',
        // AI Theme Colors (to be replaced)
        'ai-darker': '#111827',
        'ai-dark': '#1f2937',
        'ai-cyan': '#06b6d4',
        'ai-purple': '#a855f7',
        'ai-pink': '#ec4899',
        'ai-electric': '#3b82f6',
        'ai-neon': '#10b981',
        'ai-gradient-start': '#06b6d4',
        'ai-gradient-end': '#a855f7',
        // Default theme colors (can be overridden by CSS variables)
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			 sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))', // Added comma
  				// ring: 'hsl(var(--sidebar-ring))' // Moved ring outside sidebar
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))', // Added comma
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))', // Will likely map to sf-blue
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			 muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))', // Will likely map to sf-orange
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			 destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))', // Moved here from sidebar
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'Noto Sans JP', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
  		borderRadius: {
  			lg: 'var(--radius)', // Added comma
  			md: 'calc(var(--radius) - 2px)', // Added comma
  			 sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					 height: '0'
  				},
  				to: {
  					 height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					 height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					 height: '0'
  				}
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			glow: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' },
  			},
  			pulse: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' },
  			},
  			gradient: {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' },
  			},
  			shimmer: {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(100%)' },
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(100px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			typewriter: {
  				'0%': { width: '0' },
  				'100%': { width: '100%' },
  			},
  			borderSparkle: {
  				'0%, 100%': { transform: 'rotate(0deg)' },
  				'50%': { transform: 'rotate(180deg)' },
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' },
  			},
  		},
  		 animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			float: 'float 3s ease-in-out infinite',
  			glow: 'glow 2s ease-in-out infinite',
  			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			gradient: 'gradient 6s ease infinite',
  			shimmer: 'shimmer 2s linear infinite',
  			slideUp: 'slideUp 0.5s ease-out',
  			fadeIn: 'fadeIn 0.5s ease-out',
  			typewriter: 'typewriter 2s steps(40, end)',
  			borderSparkle: 'borderSparkle 3s linear infinite',
  			'spin-slow': 'spin-slow 8s linear infinite',
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'brand-gradient': 'linear-gradient(135deg, #ff8c00 0%, #ffb347 100%)',
  			'brand-gradient-subtle': 'linear-gradient(135deg, #fff 0%, #fff5e6 100%)',
  		},
  		backdropBlur: {
  			xs: '2px',
  		},
  		boxShadow: {
  			'brand-glow': '0 0 20px rgba(255, 140, 0, 0.3)',
  			'brand-glow-lg': '0 0 40px rgba(255, 140, 0, 0.3)',
  			'brand-inner': 'inset 0 0 20px rgba(255, 140, 0, 0.1)',
  			'brand-soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
  			'brand-hover': '0 4px 16px rgba(255, 140, 0, 0.15)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

