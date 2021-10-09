class VocabularyWordsController < ApplicationController
  before_action :set_vocabulary_word, only: [:show, :update, :destroy]

  # GET /vocabulary_words
  def index
    @vocabulary_words = current_user.vocabulary_words.order(created_at: :desc)

    render json: @vocabulary_words
  end

  # GET /vocabulary_words/1
  def show
    render json: @vocabulary_word
  end

  # POST /vocabulary_words
  def create
    @vocabulary_word = current_user.vocabulary_words.new(vocabulary_word_params)

    if @vocabulary_word.save
      render json: @vocabulary_word, status: :created, location: @vocabulary_word
    else
      render json: { message: "Word or translate can not be blank!", status: 422 }
    end
  end

  # PATCH/PUT /vocabulary_words/1
  def update
    if @vocabulary_word.update(vocabulary_word_params)
      render json: @vocabulary_word
    else
      render json: { message: "Word or translate can not be blank!", status: 422 }
    end
  end

  # DELETE /vocabulary_words/1
  def destroy
    @vocabulary_word.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vocabulary_word
      @vocabulary_word = current_user.vocabulary_words.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vocabulary_word_params
      params.require(:vocabulary_word).permit(:word, :pronounce, :translate, :example, :image)
    end
end
