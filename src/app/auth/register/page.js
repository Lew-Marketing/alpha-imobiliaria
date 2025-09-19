"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("As senhas não coincidem");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMsg("A senha deve ter pelo menos 6 caracteres");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      alert("Usuário criado! Verifique seu e-mail para confirmar.");
      router.push("/auth/login");
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          <h1 className="text-3xl title-luxury text-contrast-high mb-4 alpha-brand">
            <span className="alpha-a">A</span>lpha Imobiliária
          </h1>
          <p className="text-luxury-gray text-luxury-light">
            Crie sua conta
          </p>
        </div>

        {/* Formulário */}
        <div className="card-luxury rounded-premium p-8 shadow-xl">
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-premium">
              <p className="text-red-600 text-sm text-luxury">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-luxury-gray mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-gray mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury"
                placeholder="••••••••"
              />
              <p className="text-xs text-luxury-gray mt-1 text-luxury-light">
                Mínimo 6 caracteres
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury-gray mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-luxury px-6 py-3 btn-text-luxury disabled:opacity-50"
            >
              {loading ? "Criando..." : "Criar Conta"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-luxury-gray text-luxury-light">
              Já tem conta?{" "}
              <Link 
                href="/auth/login" 
                className="text-warm-lamp hover:text-warm-lamp/80 transition-colors font-medium"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="text-luxury-gray hover:text-warm-lamp transition-colors text-sm text-luxury-light"
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}